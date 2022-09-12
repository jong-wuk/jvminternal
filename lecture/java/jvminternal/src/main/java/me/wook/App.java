package me.wook;

public class App {
        static int age = 10;
        static{
            age = 20;
            System.out.println("static block");
        }
    public static void main(String[] args) {
        ClassLoader classLoader = App.class.getClassLoader();
        System.out.println(classLoader);
        System.out.println(classLoader.getParent());
        System.out.println(classLoader.getParent().getParent());
    }
}
