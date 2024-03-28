# Resources repository for blog

...

### Risorse utili

+ [Wikipedia-Markdown](https://it.wikipedia.org/wiki/Markdown): cosa sono i file markdown?
+ https://stackedit.io: editor real time di markdown
+ https://word2md.com: converte un file .doc in un file markdown 


### Regole

#### Autori
Per aggiungere nuovi autori, aggiungere alla cartella `contents/authors` un nuovo file.
Questo deve avere un nome univoco ed un'estensione `.mdx`. Si consiglia la sintassi `nome-cognome.tsx`.

Il file è composto da due parti: 
+ **head**: contiene i metadati dell'autore
  + avatar (segmento del percorso dell'immagine salvata in /images/avatars; es: `/images/avatars/lorenzo-laricchia.png`)
  + instagram
  + linkedin
  + name
  + twitter
  + website
+ **body**: contiene il vero e proprio contenuto del file markdown. Nel caso dell'autore può essere utilizzato per inserire una piccola bio, o per aggiungere un qualsiasi altro contenuto.

L'head va inserito anteposto e postposto dal delimitatore `---`.

Ecco un esempio: [lorenzo-laricchia.mdx](https://github.com/lorenzolaricchia/civitas-europa-resources/blob/main/contents/authors/lorenzo-laricchia.mdx)

#### Posts
Per aggiungere nuovi post, aggiungere alla cartella `contents/blog` un nuovo file.
Questo deve avere un nome univoco ed un'estensione `.mdx`. Si consiglia la sintassi `titolo-separato-da-un-trattino.tsx`.

Il file è composto da due parti:
+ **head**: contiene i metadati dell'autore
  + title
  + description
  + image (segmento del percorso dell'immagine salvata in /images/blog; es: `/images/blog/blog-post-3.jpg`)
  + date
  + authors (lista di autori; deve coincidere con il nome del file dell'autore, rimuovendo l'estensione)
+ **body**: contiene il vero e proprio contenuto del file markdown. Nel caso del post del blog conterrà il vero e proprio articolo.

L'head va inserito anteposto e postposto dal delimitatore `---`.

Ecco un esempio: [lorenzo-laricchia.mdx](https://github.com/lorenzolaricchia/civitas-europa-resources/blob/main/contents/posts/ldeploying-next-apps.mdx)



