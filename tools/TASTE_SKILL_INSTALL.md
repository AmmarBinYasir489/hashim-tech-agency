Install instructions for `Leonxlnx/taste-skill`

This project can't run `npx` from the automated agent due to PowerShell execution policies on the host. To install the taste-skill for frontend UI locally, run the following on your development machine:

Windows (PowerShell):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
npx skills add Leonxlnx/taste-skill
```

macOS / Linux:

```bash
npx skills add Leonxlnx/taste-skill
```

Alternative (add to repo):

If you prefer, I can add a package script that runs the above command. To run it locally after pulling, execute:

```bash
npm run install:taste
```

I will not run the installer in CI automatically — please run the above on your machine. If you want, I can add a placeholder integration file showing how to use the taste-skill output in the frontend.
