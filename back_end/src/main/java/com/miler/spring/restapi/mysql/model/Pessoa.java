package com.miler.spring.restapi.mysql.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "pessoa")
public class Pessoa {
	
	public Pessoa() {
		
	}
	
	public Pessoa(String nome, String cpf, Date dataNascimento, int peso, String uf) {
		this.nome = nome;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
		this.peso = peso;
		this.uf = uf;
	}
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	@NotNull
	@NotBlank(message = "O campo Nome é obrigatório")
	private String nome;
	@Column
	@NotNull
	@NotBlank(message = "O campo CPF é obrigatório")
	private String cpf;
	@Column
//	@JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
	private Date dataNascimento;
	@Column 
	private int peso;
	@Column 
	@NotNull
	@NotBlank(message = "O campo Estado é obrigatório")
	private String uf;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public Date getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public int getPeso() {
		return peso;
	}
	public void setPeso(int peso) {
		this.peso = peso;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	
}
