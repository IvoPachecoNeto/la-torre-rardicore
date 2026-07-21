# Como trocar fotos e vídeo do site

Para colocar suas próprias fotos e vídeo no site, basta subir os arquivos abaixo
diretamente nestas pastas do repositório, **usando exatamente esses nomes**.
Assim que o Cloudflare Workers publicar a nova versão, eles aparecem no site
automaticamente — não precisa mexer em nenhum código.

## Imagens — pasta `public/media/images/`

| Arquivo (nome exato)     | Onde aparece no site                          |
|---------------------------|------------------------------------------------|
| `hero-bg.jpg`              | Fundo da seção inicial (topo do site)          |
| `dj-photo.jpg`             | Foto do DJ (avatar no card do vídeo)           |
| `video-placeholder.jpg`    | Imagem reserva do vídeo                        |
| `logo.png`                 | Logo (opcional — veja abaixo)                  |
| `venue-1.jpg`              | 1ª foto da galeria do local ("Nosso Bar")      |
| `venue-2.jpg`              | 2ª foto da galeria do local ("Ambiente")       |
| `venue-3.jpg`              | 3ª foto da galeria do local ("Coquetelaria")   |
| `venue-4.jpg`              | 4ª foto da galeria do local ("Pista de Dança") |

## Vídeo — pasta `public/media/videos/`

| Arquivo (nome exato)   | Onde aparece no site                  |
|--------------------------|-----------------------------------------|
| `artist-video.mp4`        | Vídeo vertical de convite do DJ Zóio   |

## Passo a passo pelo site do GitHub

1. Entre no repositório no navegador.
2. Abra a pasta `public/media/images` (ou `public/media/videos` para o vídeo).
3. Clique em **Add file → Upload files**.
4. Arraste a sua foto/vídeo e **renomeie para o nome exato da tabela acima**
   (ex: `hero-bg.jpg`).
5. Se já existir um arquivo com esse nome, o upload substitui o antigo.
6. Clique em **Commit changes**.

## Usando outra extensão (ex: `.png` em vez de `.jpg`)

Se preferir subir em outro formato, é só ajustar a extensão correspondente em
`src/config.ts` (ex: trocar `"/media/images/hero-bg.jpg"` por
`"/media/images/hero-bg.png"`).

## Logo (opcional)

Por padrão o site usa o logo em SVG desenhado no código. Se quiser usar sua
própria logo, suba o arquivo `logo.png` nesta pasta e em `src/config.ts` troque
`logoUrl: ""` para `logoUrl: "/media/images/logo.png"`.
