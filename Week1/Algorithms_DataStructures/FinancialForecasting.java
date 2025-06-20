import java.util.*;


public class FinancialForecasting {

    
    public static double futureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValue(presentValue, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        double presentValue=sc.nextDouble();
        double growthRate=sc.nextDouble();
        int years=sc.nextInt();

        //double presentValue = 10000;  
        //double growthRate = 0.05;     
        //int years = 3;                

        double result = futureValue(presentValue, growthRate, years);
        System.out.printf("Future value after %d years: %.2f\n", years, result);
    }
}
