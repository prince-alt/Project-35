//Create variables here
var database,dog,happydog,pet,foodstock,foods;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");


}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  pet = createSprite(250,350,50,50);
  pet.addImage(dog);
  pet.scale = 0.2;

  foodstock = database.ref('food');
  foodstock.on("value",readStock);
  
}


function draw() {  

  background("teal");

  if(keyWentUp(UP_ARROW)){

  writeStock(foods);
  pet.addImage(happydog);

  }

  drawSprites();
  //add styles here

textSize(30);
fill ("red");
text("Food :"+foods,50,50)
  

}

function readStock(data){

foods = data.val();

}

function writeStock(x){

  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }

database.ref('/').update({

food : x

})

}



