package hospital.service;

public class HospitalTwoManyMedicamentWithSameNameException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public HospitalTwoManyMedicamentWithSameNameException(String name) {
		super("Valeur du nom plusieurs fois présentes dans la pharmacie: " + name);
	}
}
