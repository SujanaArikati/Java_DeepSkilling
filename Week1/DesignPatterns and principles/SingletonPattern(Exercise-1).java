public class Logger {
    private static Logger obj=new Logger();
    private Logger(){
        System.out.println("Successful");
    }
    public static Logger getInsatnce(){
        return obj;

    }
    
}
class TestLogger{
    public static void main(String[] args) {
        Logger l=Logger.getInsatnce();
    }
}
