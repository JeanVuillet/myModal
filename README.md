# MyModal4


I Ouverture et fermeture de la modale

Il existe deux façons de gérer l'ouverture et la fermeture de la modale

    1 La props change: celle-ci prend une valeur boolean qui, lorsqu' elle change, changera le statut de la modale (ouverte si elle est fermee et vice versa).

    2 Les props isOpen et SetIsOpen: qui correspondent à un useState type boolean et son setter. Le setter pourra être utilisé dans le composant parent pour ouvrir la modale  (setIsOpen(true)) et sera automatiquement utilisé dans la modale pour sa propre fermeture au clic sur le bouton ok.

II Customisation de la modale

    1 Message de la modale et du bouton
    Les props modalMessage et buttonMessage prennent des strings en paramètres et permettent de customiser le message de la modale et celui du bouton.
    
    2 Styles de la modale
    Les props containerObject, modalObject et buttonObject permettent respectivement de custommiser le conteneur de la modale, le div qui contient son message et le bouton de fermeture.
    Ces objets contiennent des valeurs css comme dans cet exemple:
    modalObject={{backgroundColor='blue', color='red' width='150'px}}

