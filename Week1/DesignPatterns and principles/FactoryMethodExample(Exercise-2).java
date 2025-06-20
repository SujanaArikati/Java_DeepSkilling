// File: Main.java
package FactoryMethodPatternExample;

// Document Interfaces
interface WordDocument {
    void wd();
}

interface PdfDocument {
    void pd();
}

interface ExcelDocument {
    void ed();
}

// Concrete Document Implementations
class WordDoc implements WordDocument {
    public void wd() {
        System.out.println("It is a Word document.");
    }
}

class PdfDoc implements PdfDocument {
    public void pd() {
        System.out.println("It is a PDF document.");
    }
}

class ExcelDoc implements ExcelDocument {
    public void ed() {
        System.out.println("It is an Excel document.");
    }
}

// Abstract Factory
abstract class DocumentFactory {
    public abstract Object createDocument(); // using Object for generality
}

// Concrete Factories
class WordFactory extends DocumentFactory {
    public WordDocument createDocument() {
        return new WordDoc();
    }
}

class PdfFactory extends DocumentFactory {
    public PdfDocument createDocument() {
        return new PdfDoc();
    }
}

class ExcelFactory extends DocumentFactory {
    public ExcelDocument createDocument() {
        return new ExcelDoc();
    }
}

// Main class for testing
public class DocMain {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordFactory();
        WordDocument word = (WordDocument)wordFactory.createDocument();
        word.wd();

        DocumentFactory pdfFactory = new PdfFactory();
        PdfDocument pdf = (PdfDocument) pdfFactory.createDocument();
        pdf.pd();

        DocumentFactory excelFactory = new ExcelFactory();
        ExcelDocument excel = (ExcelDocument) excelFactory.createDocument();
        excel.ed();
    }
}
