package com.example.demo.service;

import com.example.demo.model.AlunoModel;
import com.example.demo.dto.RelatorioDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlunoService {
    private final List<AlunoModel> alunos = new ArrayList<>();

    public String adicionarAluno (AlunoModel alunoModel){
        alunos.add(alunoModel);
        return "Aluno adicionado com sucesso!";
    }

    public RelatorioDTO gerarRelatorio() {
        if (alunos.size() < 2) {
            throw new IllegalStateException("É necessário cadastrar pelo menos 2 alunos para gerar o relatório.");
        }

        int numDisciplinas = 5;
        float[] somaPorDisciplina = new float[numDisciplinas];
        float somaMedias = 0;

        List<RelatorioDTO.AlunoResumo> resumos = new ArrayList<>();

        for (AlunoModel aluno : alunos) {
            float[] notas = aluno.getNotas();
            for (int i = 0; i < numDisciplinas; i++) {
                somaPorDisciplina[i] += notas[i];
            }
            float media = aluno.calcularMedia();
            somaMedias += media;
            resumos.add(new RelatorioDTO.AlunoResumo(aluno.getNome(), media, aluno.getFrequencia(), notas));
        }

        float mediaTurma = somaMedias / alunos.size();
        float[] mediasDisciplina = new float[numDisciplinas];
        for (int i = 0; i < numDisciplinas; i++) {
            mediasDisciplina[i] = somaPorDisciplina[i] / alunos.size();
        }

        List<String> acimaDaMedia = new ArrayList<>();
        List<String> frequenciaBaixa = new ArrayList<>();

        for (AlunoModel aluno : alunos) {
            if (aluno.calcularMedia() > mediaTurma) {
                acimaDaMedia.add(aluno.getNome());
            }
            if (aluno.getFrequencia() < 75) {
                frequenciaBaixa.add(aluno.getNome());
            }
        }

        return new RelatorioDTO(resumos, mediasDisciplina, acimaDaMedia, frequenciaBaixa);
    }

    public void reiniciar() {
        alunos.clear();
    }

    public int getQuantidadeAlunos() {
        return alunos.size();
    }

    public List<AlunoModel> getAlunos() {
        return alunos;
    }
}
