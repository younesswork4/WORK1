#ifndef TEST_H_INCLUDED
#define TEST_H_INCLUDED
#include <stdio.h>

typedef struct Box{
 int data;
 struct Box * next;
} Box;
 Box * ajouterAuDebut(Box * debut, int elm){
    Box * b;
    b=(Box *)malloc(sizeof(Box));
    b-> data=elm;
    b-> next=debut;
    debut=b;
}
void afficheListe(Box * debut){
Box * temp;
temp=debut;
if(debut==NULL){
    printf("la liste est vide\n");
}else{
      while(temp!=NULL){
        printf("%d ----> ",temp->data);
        temp=temp->next;
      }
}
}

#endif
