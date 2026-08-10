from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.routers.auth import router as auth_router
from app.routers.users import router as users_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="NextHire API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(users_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to NextHire API 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "ok"
    }