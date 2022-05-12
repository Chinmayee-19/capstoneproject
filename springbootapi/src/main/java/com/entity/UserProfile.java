package com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tbl_usersprofile")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserProfile {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;

	private String uname;
	
	private String email;
	
	private String companyname;
	
	private int yrsofexp;
	
	private String domain;
	
	private String skills;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public int getYrsofexp() {
		return yrsofexp;
	}

	public void setYrsofexp(int yrsofexp) {
		this.yrsofexp = yrsofexp;
	}

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public UserProfile(Long id, String name, String uname, String email, String companyname, int yrsofexp,
			String domain, String skills) {
		super();
		this.id = id;
		this.name = name;
		this.uname = uname;
		this.email = email;
		this.companyname = companyname;
		this.yrsofexp = yrsofexp;
		this.domain = domain;
		this.skills = skills;
	}

	public UserProfile() {
		super();
		// TODO Auto-generated constructor stub
	}

	

}
