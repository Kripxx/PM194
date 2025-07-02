from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Base, Fruta, Verdura
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Para ejecutar:
# uvicorn main:app --reload --host 127.0.0.1 --port 8000

# Configuración CORS para desarrollo local
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite cualquier origen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependencia para obtener la sesión de la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Utilidad para convertir los objetos ORM a diccionarios
def serialize_item(item):
    return {
        "id": item.id,
        "nombre": item.nombre,
    }

@app.post("/agregarfrutas/")
def crear_fruta(nombre: str, db: Session = Depends(get_db)):
    nueva = Fruta(nombre=nombre)
    db.add(nueva)
    db.commit()
    db.refresh(nueva)
    return serialize_item(nueva)

@app.get("/frutas/")
def listar_frutas(db: Session = Depends(get_db)):
    frutas = db.query(Fruta).all()
    return [serialize_item(f) for f in frutas]

@app.post("/agregarverduras/")
def crear_verdura(nombre: str, db: Session = Depends(get_db)):
    nueva = Verdura(nombre=nombre)
    db.add(nueva)
    db.commit()
    db.refresh(nueva)
    return serialize_item(nueva)

@app.get("/verduras/")
def listar_verduras(db: Session = Depends(get_db)):
    verduras = db.query(Verdura).all()
    return [serialize_item(v) for v in verduras]

@app.get("/productos/")
def listar_todos_los_productos(db: Session = Depends(get_db)):
    frutas = db.query(Fruta).all()
    verduras = db.query(Verdura).all()
    return {
        "frutas": [serialize_item(f) for f in frutas],
        "verduras": [serialize_item(v) for v in verduras],
    }