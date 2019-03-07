package hospital.model;

import java.util.List;

public class Traitement {
	
	private Integer id;
	
	private String clef;
	
	private boolean multi;
	
	private Patient patient;
	
	private List<Medicament> medicaments;
	
	

	public Traitement() {
		super();
	}
	
	

	public Traitement(Integer id, String clef, boolean multi, Patient patient, List<Medicament> medicaments) {
		super();
		this.id = id;
		this.clef = clef;
		this.multi = multi;
		this.patient = patient;
		this.medicaments = medicaments;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getClef() {
		return clef;
	}

	public void setClef(String clef) {
		this.clef = clef;
	}

	public boolean isMulti() {
		return multi;
	}

	public void setMulti(boolean multi) {
		this.multi = multi;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public List<Medicament> getMedicaments() {
		return medicaments;
	}

	public void setMedicaments(List<Medicament> medicaments) {
		this.medicaments = medicaments;
	}

}
