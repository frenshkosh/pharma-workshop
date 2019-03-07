package hospital.common;

public enum AdministrationType {

	 //Objets directement construits
	  dilution("dilution"),
	  oral ("oral"),
	  cutanee ("cutanee"),
	  autre ("autre");

	  private String typeadmin = "";
	   
	  //Constructeur
	  AdministrationType(String typeadmin){
	    this.typeadmin = typeadmin;
	  }
	   
	  public String getTypeAdmin(){
	    return typeadmin;
	  }
	   
	  public String toString(){
	    return typeadmin;
	  }
	
}
