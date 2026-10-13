<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the featured projects section in a standalone component with its visual tokens and styles in the global stylesheet so it can be reused without altering other portfolio sections.

## Рабочий процесс
- Любые доработки проекта обновляются и на локальном компьютере (`G:\VIBECODE\OpCODE-Projects\PORTFOLIO`), и на хостинге — без дополнительных подтверждений.
- Перед публикацией: `npm run lint`, `npm run test`, `npm run build` — все должны проходить.
- Публикация: загрузить содержимое `.output/public` (index.html, favicon.ico, robots.txt, assets/*) по FTP.
  - сервер — `77.222.61.245`, порт `21`, пользователь `korney2905`, корень сайта — `/public_html/`.
  - пароль — в `G:\VIBECODE\OpCODE-Projects\hosting.txt`.
  - имена файлов в `assets/` содержат хеш: сначала загрузить новые файлы, затем удалить устаревшие из `/public_html/assets/`.
- После публикации сверять локальный и удалённый `index.html` (md5) — они должны совпадать.
- В `portfolio-agents-promt.txt` не записывать ничего про публикацию и синхронизацию папок — там только спецификация проекта.
