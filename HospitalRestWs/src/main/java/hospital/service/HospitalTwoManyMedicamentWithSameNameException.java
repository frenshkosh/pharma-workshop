package hospital.service;

public class HospitalTwoManyMedicamentWithSameNameException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public HospitalTwoManyMedicamentWithSameNameException(String name) {
		super("Valeur du nom plusieurs fois pr�sentes dans la pharmacie: " + name);
	}
}
