# ressia_final_devapp
##Introducción
Desarrollar una App que permite dejar reseñas y calificaciones de un lugar. Los lugares estarán clasificados en categorías y se podrá tomar fotos y guardarlas con las coordenadas de la ubicación actual. Las fotos estarán asociadas a un usuario. 

##Pantallas
Splash
SignUp
Login
Profile
Location
Picture
Home
Categories
Users
Places
PlaceDetail
ImageSelector

##Navigation
La navegación se realiza por medio de TabNavigation como contenedor y stack Navigation para las pantallas.


##Componentes
Globales
Header
Navigation
PlacesStack
CategoriesStack
UsersStack

##States (redux)
La aplicacion utiliza redux para persistencia local de estados.

##SQLite
La aplicación hace uso de SQLite para almacenar localmente info de sesion.

##Data Model

###Users
id_user
name
surname
password
member_since:DATE
location
	latitude
	longitude
status
last_activity
picture
Categories
id_category
name
descript
id_picture

###Places
id_place
id_category
name:””
descript:””
location
	latitude:float
	longitude:float
pictures:[ ]

###Pictures
id_picture
picture
Activity


##Firebase
###Real time DB
Se crea una carpeta Firebase con el archivo database.js que contine la URL base de acceso.
Dentro de la carpeta services se encuentra el archivo rpService.js que contiene la lógica para gestionar los datos en Firebase.

###Authentication
Se utilizan los servicio de autenticacion de Firebase.

##Dispositivo
###Camara
Se accede a la camara del dispositivo para sacar fotos