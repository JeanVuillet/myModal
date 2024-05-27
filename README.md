# MyModal4


I Ouverture et fermeture de la modale

Il existe deux façons de gérer l ouverture et la fermeture de la modale
    1 la props change: celle ci prend une valeur boolean qui; lorsqu elle change changera le statut de la modale (ouverte si elle est fermee et vice versa)
    2 les porps isOpen et SetIsOpen: qui correspondent a un useState type boolean et son setter. le setter pourrat etre utilise dans le composant parent pour ouvrir la modale  (setIsOpen(true)) et sera automatiquement utilise dans la modale pour sa propre fermeture au clique sur le bouton ok

II Customisation de la modale
    1 message de la modale et du boutton
    les props modalMessage et buttonMessage perinent des strings en paramtres et permettent de customiser le message de la modale et celui du boutton
    2 styles de la modale
    les props containerObject modalObject et buttonObject permettent respectivement de custommiser le conteneur de la modale, le div qui contient son message et le bouton de fermeture.
    ces objets contiennent des valeurs css comme dans cet exemple:
    modalObject={{backgroundColor='blue', color='red' width='150'px}}

