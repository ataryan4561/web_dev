import java.util.*;
public abstract class phd 
{
	String description = "Unknown";
  
	public String getDescription() {
		return description;
	}
 
	public abstract double salary();
}
public class fellowship extends phd {
	public fellowship() {
		description = "Fellowship";
	}
 
	public double salary() {
		return 35000.0;
	}
}
public class nafellowship extends phd {
	public nafellowship() {
		description = "No Fellowship";
	}
 
	public double salary() {
		return 0.0;
	}
}
public abstract class Cond extends phd {
	phd p;
	public abstract String getDescription();
}
public class topup1 extends Cond {
	public topup1(phd p) {
		this.p = p;
	}

	public String getDescription() {
		return p.getDescription() + ",Topup from PDA";
	}

	public double cost() {
		return 5000.00 + p.salary();
	}
}
public class topup2 extends Cond {
	public topup2(phd p) {
		this.p = p;
	}

	public String getDescription() {
		return p.getDescription() + ",top-up from PDA-IRD";
	}

	public double cost() {
		return 6000.00 + p.salary();
	}
}
public class topup3 extends Cond {
	public topup3(phd p) {
		this.p = p;
	}

	public String getDescription() {
		return p.getDescription() + ",top-up from Project1";
	}

	public double cost() {
		return 7000.00 + p.salary();
	}
}
public class topup4 extends Cond {
	public topup4(phd p) {
		this.p = p;
	}

	public String getDescription() {
		return p.getDescription() + ",top-up from Project 2";
	}

	public double cost() {
		return 9000.00 + p.salary();
	}
}
public class mt22154
{
	public static void main(String args[]) 
    {
		phd p = new fellowship();
		System.out.println(p.getDescription() + " $" + p.salary());
        phd b2 = new fellowship();
		b2 = new topup1(b2);
		System.out.println(p.getDescription() + " $" + p.salary());
    }
}