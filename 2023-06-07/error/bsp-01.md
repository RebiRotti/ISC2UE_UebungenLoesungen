In diesem Beispiel ist ein kleiner Fehler im Schleifenbedingungsausdruck der for-Schleife vorhanden. Die Schleife soll
über jedes Element des numbers-Arrays iterieren, aber der Ausdruck i <= numbers.length ist fehlerhaft, da das
Array-basierte Indexing bei 0 beginnt. Der richtige Ausdruck sollte i < numbers.length sein.


