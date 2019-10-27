# Diagram app RnD

Simply run `yarn start` and the server will start on port `9000`.

### Stylowanie, tworzenie modeli
Tworzenie własnych modeli, grafów, elementów w prosty sposób wspierane jest przez bibliotekę. 
Tworzenie elementu(widgetu czyli reactowej klasy lub komponentu funkcyjnego) wymaga stworzenia modeli opisujacych element. Stylizacja takiego widgetu nie sprawia trudnosci i jest mozliwość cutomizacji kazdego elementu: noda, poru i ich linków. Stylować mozna klasami, jak tez inlinowo per komponent.

Do tworzenia elementów mozna korzystać z markupa html


### Dane modelu
Biblioteka nie daje mozliwości prostego eksportu danych dotyczącego modelu nad którm uzytkownik pracuje. Aplikacja wymaga napisania wrappera do zarzadzania stanem modelu i zapiswyania tego stanu. Dostępne są metody pozwalające dostać się do informacji o modelu `engine`, poruszanie się grafie moze nastręczać trudności.

### Wydajność
Biblioteka nie wykorzystuje `canvas`. Renderuje wszystkie nody jako elemnt html. Wydajność zleznie od platwormy wdocznie spada przy 150+ elementach. Duza ilość elementów nie powduje jednak niestabilenego działania biblioteki

### Współpraca



