/* 
    Dans certains exercice, le flag g sera nécessaire, exemple : /maRegex/g 
*/

/* 
    Pour le premier exercice, nous aimerions avoir une regex qui matche les adresses mail 
*/
export const regexExercice1 = /.+/;

/* 
    Pour ce second exercice, nous souhaitons réussir à matcher les nombres entiers de cet intervalle : [-25; 30[ 
*/
export const regexExercice2 = /.+/;

/* 
    Pour ce quatrième exercice, on va se servir des logs de l'exemple 
    On veut ré-écrire les logs sous la forme :

    Timestamp             Nom de Package                               Version
    [2019-05-10 16:28:00] Microsoft.VisualStudio.ProjectSystem.Managed 3.0.0.6382007

    Sur les packages que l'on a installé
*/
export const regexExercice3 = /^.+?(\[.+\]) Package: (.+?),version=(.+?),.+?RequestedState: Present/gm;

/* 
    Nous sommes un généticien,
    et comme tout bon généticien, nous avons quelques bases en génétique

    Il se trouve qu'en génétique, il y a des "codons" dans l'ADN : 
    des groupements de 3 paires azotées (ATGC, avec leur complémentaire) qui codent pour une "peptide" lorsque décodés par
    le biais d'un ARN messager et de plein d'autres choses chouettes dans la cellule !
    Sachant qu'une protéine est formée de plusieurs peptides, la lecture de notre ADN permet donc la formation de protéines, formidable !
    https://fr.wikipedia.org/wiki/Acide_ribonucl%C3%A9ique_messager

    Ce qui nous intéresse ici, c'est que nous avons une copie du Gène POU5F1,
    un gène important pour le développement embryonnaire et la différentiation des cellules souches (du moins chez l'humain)
    https://www.ncbi.nlm.nih.gov/gene?cmd=Retrieve&dopt=full_report&list_uids=5460

    Chez le serpent, ce gène est un peu plus rigolo : il s'exprime plus longtemps lors de son développement embryonnaire,
    et serait responsable de sa longue forme

    En génétique, il y a 2 types de codons très intéressants : les codons-start et codons-stop
    https://fr.wikipedia.org/wiki/Codon_d%27initiation
    https://fr.wikipedia.org/wiki/Codon-stop

    Le codon d'initiation signifie qu'il faut démarrer la lecture de la séquence pour générer une protéine,
    et le codon stop arrête la lecture
    Il y a un codon d'initiation : ATG
    et 3 codons-stop : TGA, TAG et TAA

    Il n'y a pas encore si longtemps de cela, les généticiens pensaient que les séquences codantes pour un gène n'était lues qu'une fois
    tout en laissant possiblement ce qu'ils appellent des "Cadre de lecture ouverts" (CDS en anglais)
    https://fr.wikipedia.org/wiki/Cadre_de_lecture_ouvert

    Ils ont pour cela relevé dans les cellules, les protéines qui étaient fabriquées lorsqu'un brin d'ADN particulier était lu.
    En comparant les protéines, leurs peptides, et la séquence, ils déterminent donc la partie codante pour le gène.
    Et également pour les "cadres de lecture ouverts" qui seraient aussi également lus et donneraient lieu à la fabrication
    de plusieurs petites protéines (avec peu de peptides)

    Récemment, une équipe de recherche française aurait relevé la présence de plein de micro-protéines dans les cellules
    dont l'existence serait dûes à des CDS non identifiés

    Nous allons donc aider nos amis chimistes, et analyser la séquence ADN du gène POU5F1 afin de trouver combien de CDS pourraient
    s'y cacher !
*/
export const regexExercice4 = /.+/;

/* 
    Bonus : Les brins d'ADN sont en double-hélice, et chaque paire azotée (ATGC) a son homologue : A et T, G et C
    Vous remarquez que vous avez analysé le mauvais côté de l'hélice d'ADN, pouvez-vous modifier votre regex pour analyser l'autre brin ?
*/
export const regexExercice4Bonus = /.+/;

/* 
    Pour ce cinquième exercice, nous voulons vérifier que l'utilisateur a rentré un nombre rationnel dans le champ de saisie
    Attention, les bonus sont coriaces
*/
export const regexExercice5 = /.+/;