FROM python:3.9

# Set environment variables
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt

# Install dependencies.
RUN pip install -r /requirements.txt
RUN pip install Pillow

# Set work directory.
RUN mkdir /django
WORKDIR /django

# Copy project code.
COPY . /django/