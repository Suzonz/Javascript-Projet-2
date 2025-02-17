const prompt = require("prompt-sync")()

let end = ""
let point = 0
let text = prompt("ᓚ(= Φ Ⱉ Φ =)ฅ ᵐᵉᵒʷˎˊ˗ ")
text = prompt("Bienvenue dans le quizz ! ")
text = prompt("Cinq questions ont été séléctionnyées pour vous ")
text = prompt("Saurez-vous trouver les bonnes répyonses ? ")

while (end == 0) {


    /* ONE */

    /*     let riddleOne = prompt("")
        riddleOne = prompt("Au secours ! Quinze personnes sont piégées sur un navire en train de sombrer. ")
        riddleOne = prompt("Le bateau va couler dans très exactement vingt minutes. ")
        riddleOne = prompt("Leur seule chance de survie est le canot de sauvetage qui ne peut prendre que cinq personnes à son bord. ")
        riddleOne = prompt("Histoire d'arranger les choses, les eaux sont infestées par de dangereux requins mangeurs d'hommes. Nager est donc hors de question ! ")
        riddleOne = prompt("Un aller - retour en direction de l'île la plus proche prend environ neuf minutes. ")
            riddleOne = prompt("")
    riddleOne = prompt("Combien de personnes pourront être sauvées ? ")
        riddleOne = prompt("12, 13, 14 ou 15 ? ")
        let answer = prompt("Répyonse : ")
        while (answer != 12 || answer != 13 || answer != 14 || answer != 15) {
            if (answer == 13) {
                let rightAnswer = prompt("")
                rightAnswer = prompt("Bonne répyonse ᓚ(=🝦 ﻌ 🝦 =) ")
                rightAnswer = prompt("Une minute de silence pour les deux malheureux qui ne s'en sont pas sortis... ")
                break
                point++
            } else if (answer == 12 || answer == 14 || answer == 15) {
                wrongAnswer = prompt("Mauvaise répyonse (=🝦 ㅅ 🝦 =)⟆ ")
                break
            } else {
                let error = prompt("Erreur de saisie ")
                riddleOne = prompt("Combien de personnes pourront être sauvées ? ")
                riddleOne = prompt("12, 13, 14 ou 15 ? ")
                answer = prompt("Répyonse : ")
            }
        } */


    /* TWO */

    let riddleTwo = prompt("")
    riddleTwo = prompt("Un homme s'est fait prescrire dix gélules ")
    riddleTwo = prompt("À compter d'aujourd'hui, il doit prendre une gélule par jour, mais dans un ordre bien précis ")
    riddleTwo = prompt("Étant donné que les gélules se ressemblent toutes, il a décidé d'inscrire un numéro sur chacune d'entre elles pour se rappeler de l'ordre exact ")
    riddleTwo = prompt("")
    riddleTwo = prompt("Combien de gélules devra-t-il numéroter au minimum ? ")
    riddleTwo = prompt("7, 8, 9 ou 10 ? ")
    answer = prompt("Répyonse : ")

    while (answer != 7 || answer != 8 || answer != 9 || answer != 10 ) {
        if (answer == 8) {
            rightAnswer = prompt("Bonne répyonse ᓚ(=🝦 ﻌ 🝦 =) ")
            rightAnswer = prompt("Il doit avant tout prendre sa première gélule et n'a donc plus besoin de la numéroter ")
            rightAnswer = prompt("Ensuite, il devra numéroter les gélules de deux à neuf ")
            rightAnswer = prompt("La dernière gélule n'a pas besoin d'être numérotée car elle sera la seule sans numéro ")
            rightAnswer = prompt("Il est donc nécessaire de numéroter que huit gélules ")
            point++
            break
        } else if (answer == 7 || answer == 9 || answer == 10) {
            wrongAnswer = prompt("Mauvaise répyonse (=🝦 ㅅ 🝦 =)⟆ ")
            break
        } else {
            error = prompt("Erreur de saisie ")
            riddleTwo = prompt("Combien de gélules devra-t-il numéroter au minimum ? ")
            riddleTwo = prompt("7, 8, 9 ou 10 ? ")
            answer = prompt("Répyonse : ")
        }
    }


    /* THREE */

    let riddleThree = prompt("")
    riddleThree = prompt("Cinq suspects sont interrogés par la police. Voici ce qu'ils ont à dire : ")
    riddleThree = prompt("")
    riddleThree = prompt("A : \u00ab L\'un d'entre nous est en train de mentir \u00bb ")
    riddleThree = prompt('B : \u00ab Parmi nous cinq, seules deux personnes sont en train de mentir \u00bb ')
    riddleThree = prompt('C : \u00ab Je connais bien ces types ! Je peux vous assurer qu\'il y a trois menteurs, pas plus! \u00bb ')
    riddleThree = prompt('D : \u00ab Ne les écoutez pas. Parmi nous, quatre personnes sont en train de mentir \u00bb ')
    riddleThree = prompt('E : \u00ab Nous sommes tous de fieffés menteurs ! \u00bb ')
    riddleThree = prompt("")
    riddleThree = prompt("La police souhaite relâcher ceux qui disent la vérité ")
    riddleThree = prompt("")
    riddleThree = prompt("Combien de personnes doit-elle laisser partir ? ")
    riddleThree = prompt("1, 2, 3 ou 4 ? ")
    answer = prompt("Répyonse : ")

    while (answer != 1 || answer != 2 || answer != 3 || answer != 4 ) {
        if (answer == 1) {
            rightAnswer = prompt("Bonne répyonse ᓚ(=🝦 ﻌ 🝦 =) ")
            rightAnswer = prompt("Chaque suspect accusait un nombre différent de personnes, contredisant ainsi les autres ")
            rightAnswer = prompt("Il ne pouvait donc y avoir qu'une seule personne à dire la vérité ")
            rightAnswer = prompt("Le seul suspect dont la déclaration colle à la réalité est D. Le voilà libre comme l'air ")
            point++
            break
        } else if (answer == 2 || answer == 3 || answer == 4) {
            wrongAnswer = prompt("Mauvaise répyonse (=🝦 ㅅ 🝦 =)⟆ ")
            break
        } else {
            error = prompt("Erreur de saisie ")
            riddleThree = prompt("Combien de personnes la police doit-elle laisser partir ? ")
            riddleThree = prompt("1, 2, 3 ou 4 ? ")
            answer = prompt("Répyonse : ")
        }
    }


    /* FIVE */

    /*let riddleFive = prompt("")
    riddleFive = prompt("On verse de l'eau dans un réservoir de 2,5m de profondeur pendant 8 heures, en commençant à 9h du matin ")
    riddleFive = prompt("Le niveau de l'eau monte de 60cm au cours de la journée ")
    riddleFive = prompt("Cependant, il semble que le réservoir soit percé car, le lendemain, le niveau de l'eau est descendu de 20cm ")
    riddleFive = prompt("")
    riddleFive = prompt("Si le réservoir continue à se remplir à cette vitesse, soit 40cm par jour, au bout de combien de jours commencera - t - il à déborder ? ")
    riddleFive = prompt("6, 7, 8 ou 9 ? ")
    answer = prompt("Répyonse : ")

    while (answer != 6 || answer != 7 || answer != 8 || answer != 9 ) {
        if (answer == 6) {
            rightAnswer = prompt("Bonne répyonse ᓚ(=🝦 ﻌ 🝦 =) ")
            rightAnswer = prompt("Le piège ici consiste à penser que, comme le niveau de l'eau monte en pratique de 40cm par jour ")
            rightAnswer = prompt("Le niveau du réservoir sera de 2,4m à la fin du sixième jour, et donc qu'il commencera à déborder le septième jour ")"
            rightAnswer = prompt("Mais en fait, le réservoir commence à 200cm le matin du sixième jour et gagne 60cm d'eau au cours de la journée, faisant ainsi déborder le réservoir ")
            point++
            break
        } else if (answer == 4 || answer == 8 || answer == 9) {
            wrongAnswer = prompt("Mauvaise répyonse (=🝦 ㅅ 🝦 =)⟆ ")
            break
        } else {
            error = prompt("Erreur de saisie ")
            riddleFive = prompt("Au bout de combien de jours commencera - t - il à déborder ? ")
            riddleFive = prompt("6, 7, 8 ou 9 ? ")
            answer = prompt("Répyonse : ")
        }
    } */


    /* SIX */

    let riddleSix = prompt("")
    riddleSix = prompt("Lorsque vous jetez un dé, vous avez une chance sur six d'obtenir un trois ")
    riddleSix = prompt("La probabilité d'obtenir un trois deux fois de suite est d'une chance sur 36, quant à la probabilité d'obtenir un trois trois fois de suite, elle n'est plus que d'une chance sur 216 ")
    riddleSix = prompt("Imaginons que vous venez de lancer un dé trois fois de suite. A chaque lancer, vous avez obtenu un trois ")
    riddleSix = prompt("")
    riddleSix = prompt("La probabilité que vous obteniez un trois au prochain lancer est d'une chance sur... ? ")
    riddleSix = prompt("6, 36, 216 ou 1296 ? ")
    answer = prompt("Répyonse : ")


    while (answer != 6 || answer != 36 || answer != 216 || answer != 1296 ) {
        if (answer == 6) {
            rightAnswer = prompt("Bonne répyonse ᓚ(=🝦 ﻌ 🝦 =) ")
            rightAnswer = prompt("Le fait que vous ayez obtenu un trois trois fois de suite auparavant ne change rien ")
            rightAnswer = prompt("Mais en fait, le réservoir commence à 200cm le matin du sixième jour et gagne 60cm d'eau au cours de la journée, faisant ainsi déborder le réservoir ")
            rightAnswer = prompt("Vous devez simplement connaître la probabilité d'obtenir un trois sur un lancer ")
            rightAnswer = prompt("La répyonse est donc évidente: une chance sur six ")
            point++
            break
        } else if (answer == 36 || answer == 216 || answer == 1296) {
            wrongAnswer = prompt("Mauvaise répyonse (=🝦 ㅅ 🝦 =)⟆ ")
            break
        } else {
            error = prompt("Erreur de saisie ")
            riddleSix = prompt("La probabilité que vous obteniez un trois au prochain lancer est d'une chance sur... ? ")
            riddleSix = prompt("6, 36, 216 ou 1296 ? ")
            answer = prompt("Répyonse : ")
        }
    }


    /* SEVEN */

    let riddleSeven = prompt("")
    riddleSeven = prompt("Un jeune garçon est en train de se targuer du nombre d'animaux qu'il possède ")
    riddleSeven = prompt("\u00ab J'ai dix animaux. J'ai non seulement des canaris et des chiens, mais également des tortues et même des serpents! \u00bb ")
    riddleSeven = prompt("\u00ab Je ne vais pas vous dire combien j'en ai de chaque, mais je peux vous dire que j'ai en tout six ailes, trois carapaces et vingt-six pattes! \u00bb ")
    riddleSeven = prompt("")
    riddleSeven = prompt("Combien le garçon possède-t-il de serpents ? ")
    riddleSeven = prompt("1, 2, 3 ou 4 ? ")
    answer = prompt("Répyonse : ")


    while (answer != 1 || answer != 2 || answer != 3 || answer != 4 ) {
        if (answer == 2) {
            rightAnswer = prompt("Bonne répyonse ᓚ(=🝦 ﻌ 🝦 =) ")
            rightAnswer = prompt("Le garçon possède deux serpents ")
            rightAnswer = prompt("S'il y a six ailes, cela implique qu'il y a trois canaris pour un total de six pattes ")
            rightAnswer = prompt("Trois carapaces, donc trois tortues, donc douze pattes ")
            rightAnswer = prompt("En tout, cela nous donne dix-huit pattes, ce qui ne nous laisse que huit pattes, soit deux chiens ")
            rightAnswer = prompt("On arrive à un total de huit animaux, ce qui nous laisse de la place pour deux serpents ")
            point++
            break
        } else if (answer == 1 || answer == 3 || answer == 4) {
            wrongAnswer = prompt("Mauvaise répyonse (=🝦 ㅅ 🝦 =)⟆ ")
            break
        } else {
            error = prompt("Erreur de saisie")
            riddleSeven = prompt("Combien le garçon possède-t-il de serpents ? ")
            riddleSeven = prompt("1, 2, 3 ou 4 ? ")
            answer = prompt("Répyonse : ")
        }
    }


    /* EIGHT */

    let riddleEight = prompt("")
    riddleEight = prompt("Un jeune garçon est assis et lance tranquillement un dé à six faces ")
    riddleEight = prompt("A chaque fois que le dé s'arrête, il le prend, l'examine et murmure quelque chose ")
    riddleEight = prompt("A chaque fois que le dé s'arrête sur le 1, il murmure \u00ab 15 \u00bb ")
    riddleEight = prompt("A chaque fois qu'il s'arrête sur le 6, il murmure \u00ab 20 \u00bb ")
    riddleEight = prompt("")
    riddleEight = prompt("Le garçon lance le dé et vient de sortir un 3. Quel nombre va-t-il murmurer cette fois ? ")
    riddleEight = prompt("10, 17, 19 ou 25 ? ")
    answer = prompt("Répyonse : ")


    while (answer != 10 || answer != 17 || answer != 19 || answer != 25 ) {
        if (answer == 17) {
            rightAnswer = prompt("Bonne répyonse ᓚ(=🝦 ﻌ 🝦 =) ")
            rightAnswer = prompt("Le garçon compte le nombre de points actuellement visibles sur le dé ")
            rightAnswer = prompt("La seule face du dé qui n'est pas comptabilisée est celle qui fait face au sol ")
            rightAnswer = prompt("Les deux faces opposées d'un dé donnent toujours une somme de 7, il est donc facile de calculer la somme de tous les points des faces visibles d'un dé ")
            point++
            break
        } else if (answer == 10 || answer == 19 || answer == 25) {
            wrongAnswer = prompt("Mauvaise répyonse (=🝦 ㅅ 🝦 =)⟆ ")
            break
        } else {
            error = prompt("Erreur de saisie ")
            riddleEight = prompt("Quel nombre va murmurer le garcon cette fois ? ")
            riddleEight = prompt("10, 17, 19 ou 25 ? ")
            answer = prompt("Répyonse : ")
        }
    }
    text = prompt("")
    text = prompt("Félicitations, vous avez terminé le quizz.")
    text = prompt("")
    console.log("Votre score est de " + point + "/5");

    if (point > 3) {
        text = prompt("")
        text = prompt("ᓚ(= 🝦 ﻌ 🝦 =) Impresionnyant")
        text = prompt("")

    } else {
        text = prompt("")

        text = prompt("ᓚ(= 🝦 ㅅ 🝦 =) " + point + "/5 , vraimeow ?")
        text = prompt("")
    }

    text = prompt("Voulez-vous réessayer ?    (=🝦 ㅅ 🝦 =)⟆ ")
    let retry = prompt("oui ou non ? ")
    if (retry == "Oui" || retry == "OUi" || retry == "OUI" || retry == "oUi" || retry == "oUI" || retry == "ouI" || retry == "OuI" || retry == "oui") {
        end = 0
    } else {
        break
    }
}