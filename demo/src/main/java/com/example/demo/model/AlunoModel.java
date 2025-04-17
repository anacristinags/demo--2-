package com.example.demo.model;

public class AlunoModel {
    private String nome;
    private float[] notas;
    private float frequencia;

    public AlunoModel() {
    }

    public AlunoModel(String nome, float[] notas, float frequencia) {
        this.nome = nome;
        this.notas = notas;
        this.frequencia = frequencia;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public float[] getNotas() {
        return notas;
    }

    public void setNotas(float[] notas) {
        this.notas = notas;
    }

    public float getFrequencia() {
        return frequencia;
    }

    public void setFrequencia(float frequencia) {
        this.frequencia = frequencia;
    }

    public float calcularMedia() {
        float soma = 0;
        for (float nota : notas) {
            soma += nota;
        }
        return soma / notas.length;
    }
}
