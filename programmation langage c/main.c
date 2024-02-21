#include <stdio.h>
#include <stdlib.h>
#include "listedebut.h"
int main()
{
   Box * l1=NULL;
   int n,i,nbr;
   printf("Donner le nombre des element:\n");
   scanf("%d",&nbr);
   for(i=0;i<nbr;i++){
    scanf("%d",&n);
    l1=ajouterAuDebut(l1,n);
   }
   afficheListe(l1);
    return 0;
}
