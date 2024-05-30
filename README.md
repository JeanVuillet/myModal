# MyModal4

Preciser la version de node a utiliser

l editeur de texte recommande vsc
pour l installer 
-npm install mymodal4
-import 'mymodal4' 

I Ouverture et fermeture de la modale




Les props isOpen et SetIsOpen: qui correspondent à un useState type boolean et son setter. Le setter pourra être utilisé dans le composant parent pour ouvrir la modale  (setIsOpen(true)) et sera automatiquement utilisé dans la modale pour sa propre fermeture au clic sur le bouton ok.

II Customisation de la modale

    1 Message de la modale et du bouton
    Les props modalMessage et buttonMessage prennent des strings en paramètres et permettent de customiser le message de la modale et celui du bouton.
    
    2 Styles de la modale
    Les props containerObject, modalObject et buttonObject permettent respectivement de custommiser le conteneur de la modale, le div qui contient son message et le bouton de fermeture.
    Ces objets contiennent des valeurs css comme dans cet exemple:
    modalObject={{backgroundColor='blue', color='red' width='150'px}}

