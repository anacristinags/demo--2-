package com.example.demo.dto;

import java.util.List;

public class RelatorioDTO {

    public static class AlunoResumo {
        public String nome;
        public float media;
        public float frequencia;
        public float[] notas; 

        public AlunoResumo(String nome, float media, float frequencia, float[] notas) {
            this.nome = nome;
            this.media = media;
            this.frequencia = frequencia;
            this.notas = notas;
        }      
    }

    private List<AlunoResumo> alunos;
    private float[] mediaDisciplinas;
    private List<String> acimaDaMedia;
    private List<String> frequenciaBaixa;

    public RelatorioDTO(List<AlunoResumo> alunos, float[] mediaDisciplinas,
                        List<String> acimaDaMedia, List<String> frequenciaBaixa) {
        this.alunos = alunos;
        this.mediaDisciplinas = mediaDisciplinas;
        this.acimaDaMedia = acimaDaMedia;
        this.frequenciaBaixa = frequenciaBaixa;
    }

    public List<AlunoResumo> getAlunos() {
        return alunos;
    }

    public float[] getMediaDisciplinas() {
        return mediaDisciplinas;
    }

    public List<String> getAcimaDaMedia() {
        return acimaDaMedia;
    }

    public List<String> getFrequenciaBaixa() {
        return frequenciaBaixa;
    }
    
}
