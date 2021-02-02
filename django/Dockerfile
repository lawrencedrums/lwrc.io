FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DEBUG 0

COPY ./requirements.txt /requirements.txt

# Install dependencies.
RUN pip install -r /requirements.txt
RUN pip install Pillow

# Set work directory.
RUN mkdir /django
WORKDIR /django

# Copy project code.
COPY . /django/

# add and run as non-root user
RUN useradd -m myuser
USER myuser

CMD gunicorn django_server.wsgi:application --bind 0.0.0.0:$PORT
