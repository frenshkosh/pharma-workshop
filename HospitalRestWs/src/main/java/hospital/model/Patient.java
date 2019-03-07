package hospital.model;

public class Patient {
	
	private Integer id;
	
	private String nom;
	
	private String nosecu;
	
	public Patient() {
		super();
	}

	public Patient(Integer id, String nom, String nosecu) {
		super();
		this.id = id;
		this.nom = nom;
		this.nosecu = nosecu;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getNosecu() {
		return nosecu;
	}

	public void setNosecu(String nosecu) {
		this.nosecu = nosecu;
	}
	
	

}
