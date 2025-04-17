package com.example.demo.controller;

import com.example.demo.model.AlunoModel;
import com.example.demo.dto.RelatorioDTO;
import com.example.demo.service.AlunoService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/demo")
@CrossOrigin(origins = "*")
public class AlunoController {
    @Autowired
    private AlunoService service;

    @GetMapping
    public String status() {
        return "API de alunos está no ar!";
    }

    @GetMapping("/alunos")
    public List<AlunoModel> listarAlunos() {
        return service.getAlunos();
    }

    @PostMapping
    public String adicionarAluno(@RequestBody AlunoModel aluno) {
        return service.adicionarAluno(aluno);
    }

    @GetMapping("/relatorio")
    public RelatorioDTO gerarRelatorio() {
        return service.gerarRelatorio();
    }

    @PostMapping("/reiniciar")
    public String reiniciar() {
        service.reiniciar();
        return "Sistema reiniciado.";
    }

    @GetMapping("/quantidade")
    public int getQuantidadeAlunos() {
        return service.getQuantidadeAlunos();
    }
}