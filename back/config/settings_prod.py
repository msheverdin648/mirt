from pathlib import Path
from datetime import timedelta

import os

BASE_DIR = Path(__file__).resolve().parent.parent



STATIC_ROOT = os.path.join(BASE_DIR, 'static')
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')


CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://localhost:3000",
    "http://127.0.0.1:3000",
]

CORS_ALLOW_ALL_ORIGINS = True


CSRF_TRUSTED_ORIGINS=[
    'http://localhost:3000',
    "http://127.0.0.1:3000",
    ]


