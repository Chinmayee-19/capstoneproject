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
@Table(name = "tbl_jobs")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Job {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String logo;
	
	private String companyname;
	
	private String designation;
	
	private int yrsofexp;
	
	private String jobdesc;
	
	private String Location;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public int getYrsofexp() {
		return yrsofexp;
	}

	public void setYrsofexp(int yrsofexp) {
		this.yrsofexp = yrsofexp;
	}

	public String getJobdesc() {
		return jobdesc;
	}

	public void setJobdesc(String jobdesc) {
		this.jobdesc = jobdesc;
	}

	public String getLocation() {
		return Location;
	}

	public void setLocation(String location) {
		Location = location;
	}

	public Job(Long id, String logo, String companyname, String designation, int yrsofexp, String jobdesc,
			String location) {
		super();
		this.id = id;
		this.logo = logo;
		this.companyname = companyname;
		this.designation = designation;
		this.yrsofexp = yrsofexp;
		this.jobdesc = jobdesc;
		Location = location;
	}

	public Job() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
