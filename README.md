# DrumKit in Vanilla JS

[Click here too play](<a href ="https://madamemeduse.github.io/Drum-Kit-in-Vanilla-JS/"></a>)



## Instalation

Aby uruchomić grę należy kliknąc w link na samej górze lub:

Uruchomic za pomocą liveserver
```bash
npm install -g live-server
npx live-server
```
zainstalować SASS przez
```bash
npm install -g sass
``` 
Kompilacja do folderu css za pomocą 
```bash
npx sass --watch scss:css
``` 


## Logic


1. EventListener na window który odpala funkcje handleKeyDown;
2. funkcja handleKeyDown() 
- ma zmienną audio dopasowuje scieżkę dźwiękową do klikniętego klawisza
- jeśli nie ma audio stopuje dzialanie
 - dodaje klasę playing do klawisza
3. do każdego klawisza eventListener który nasłuchuje końca transition i odpala funkcje removeTransition();
4. removeTransition()  
 - nie uruchamia się jeśli tranzycja nie dotyczy właściwości 'transform'
 - usuwa klasę 'playing' z klikniętego klawisza */

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

