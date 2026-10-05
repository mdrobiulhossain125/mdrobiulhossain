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

- Keep academic profile content in a shared data module and render it through TanStack routes; this avoids conflicting facts across pages.
- Provide the CV as a print-friendly web route rather than an invented PDF; the uploaded source is LaTeX text, not a finished PDF.
- Serve uploaded photos and other media through a CDN asset pointer (src/assets/*.asset.json) instead of committing the binary; keeps the repository light and the URL stable.
