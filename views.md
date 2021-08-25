#Dashboard
- '/' 
--statystyki dzisiejszych zamowien (zdalne i lokalne)
--lista rezerwacji i eventów zaplanowanych na dzisiaj

#Logowanie
- '/login'
--pola na login i haslo
--guzik do zalogowania (link do dashbordu)

#Widok dostępności stolików

- '/tables'
-- wybor daty i godziny
-- tabela z lista rezerwacji oraz wydarzen
---kazda kolumna = jeden stolik
---kazdy wiersz = blok 30 min
---ma przypominac idok tygodnia w kalendarzu googla gdzie w kolumnach zamiast dni sa rozne stoliki
---po kliknieciu rezerwacji lub eventu  przechodzimy na strone szczegolow

- '/tables/booking/:id' - szczególy  rezerwacji
--musi zawierac wszystkie informacje dotyczace rezerwacji
--musi umozliwac edycje i zapisanie zmian

- '/tables/booking/new'
--analogicznie do poprzedniej, bez poczatkowych informacji

- '/tables/events/:id'
--analogicznie do poprzedniej

- '/tables/events/new'
--analogicznie do poprzedniej, bez poczatkowych informacji

#Widok kelnera
- '/waiter' - lista stolików i ich aktualny status np. infor czy ktos złozyl juz zamówienie lub czy zaplacił
--glowna podstrona tego widoku musi zawierac tabele ktora:
---w wierszach bedzie wyswietlala stoliki
---w kolumnach rozne rodzaje informacji np. status danego stolika(czy ktos juz zalozyl zamowienie, czy zaplacil), czas od ostatniej aktywnosci(ile czasu minelo od ostatniej zmiany statusu)
---w ostaniej kolumnie dostepne akcje dla danego stolika 

- '/waiter/order/new' - kelner wybiera produkty zamowiene przez klientów z tego stolika
--numer stolika(edytowalny)
--menu produktow dostepnych w restauracji
--opcje wybranego produktu
--zamowienie czyli zamowione produkty z opcjami i ceną
--kwota zamowienia

- '/waiter/order/:id' - kelner wyswietla jakies zamowienie
--jak powyzej - z tym ze ma od razu wprowadzona czesc informacji 

#Widok kuchni
- '/kitchen'
--wyswietlac lista zamowien w kolejnosci ich zlozenia
--lista musi zawierac nr stolika lub zamowienia zdalnego oraz pelne informacje dot. zamowionych dań
--na liscie musi byc mozliwosc oznaczenia zamowienia jako zrealizowane