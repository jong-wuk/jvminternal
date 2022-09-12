package me.wook;

import javax.crypto.Cipher;
import java.util.List;

public class App {

    static String myName;
    static{
        myName = "wook";
    }

    private String foo = "bar";

    public static void main(String[] args) {
        System.out.println(App.class.getSuperclass());
    }
}
