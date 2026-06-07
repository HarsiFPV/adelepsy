# Déploiement sur Vercel

## Paramètres du projet

Dans Vercel, importer le dépôt Git puis utiliser les paramètres suivants :

| Paramètre           | Valeur            |
| ------------------- | ----------------- |
| Framework Preset    | `Other`           |
| Root Directory      | `./`              |
| Install Command     | `npm install`     |
| Build Command       | `npm run build`   |
| Output Directory    | Ne pas surcharger |
| Development Command | `npm run dev`     |
| Node.js Version     | `24.x`            |

Le build utilise Nitro avec le preset `vercel` configuré dans `vite.config.ts`. Il génère
directement la structure Vercel Build Output API dans `.vercel/output`, y compris la fonction SSR.
Il ne faut donc pas définir `dist`, `public` ou `.vercel/output/static` comme Output Directory.

## Variables d'environnement

Aucune variable d'environnement n'est actuellement requise.

Si des variables sont ajoutées plus tard, les renseigner dans :

`Project Settings > Environment Variables`

Les variables destinées au navigateur doivent commencer par `VITE_`.

## Premier déploiement

1. Pousser le projet sur GitHub, GitLab ou Bitbucket.
2. Dans Vercel, cliquer sur `Add New > Project`.
3. Importer le dépôt.
4. Reporter les paramètres du tableau ci-dessus.
5. Cliquer sur `Deploy`.

Chaque push sur la branche de production déclenchera ensuite un nouveau déploiement.

## Domaine personnalisé

Dans `Project Settings > Domains`, ajouter :

```text
adelepincemaille-psychologue.fr
www.adelepincemaille-psychologue.fr
```

Choisir un domaine principal et rediriger l'autre vers celui-ci. Appliquer ensuite les
enregistrements DNS indiqués par Vercel chez le fournisseur du nom de domaine.

Le domaine de production doit rester cohérent avec :

- `src/routes/sitemap[.]xml.ts`
- `public/robots.txt`

## Vérification avant déploiement

Depuis PowerShell :

```powershell
cd D:\0_dev\adelepsy
npm.cmd install
npm.cmd run build
```

Après le déploiement, vérifier :

- `/`
- `/rendez-vous`
- `/sitemap.xml`
- l'affichage et la réservation complète dans Cal.eu
- les liens téléphone et email
- le rendu sur mobile

## Déploiement avec la CLI

Optionnel :

```powershell
npx.cmd vercel
npx.cmd vercel --prod
```

Pour déployer un build déjà généré :

```powershell
npm.cmd run build
npx.cmd vercel deploy --prebuilt --prod
```

## Dépannage

- Si Vercel tente d'utiliser Bun, conserver explicitement `npm install` comme Install Command.
- Si le build réussit mais que les routes SSR renvoient une erreur, vérifier que l'Output
  Directory n'a pas été surchargé.
- Ne pas déployer uniquement le dossier `public` : l'application utilise TanStack Start et SSR.
- Les avertissements `use client` affichés pendant le build sont actuellement non bloquants.

## Documentation

- [Configurer un build Vercel](https://vercel.com/docs/builds/configure-a-build)
- [Vercel Build Output API](https://vercel.com/docs/build-output-api/v3)
- [Déploiement avec la CLI Vercel](https://vercel.com/docs/cli/deploying-from-cli)
