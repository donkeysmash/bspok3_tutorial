FROM python:latest
WORKDIR /app
ADD . /app
EXPOSE 5000
RUN pip install -r requirements.txt
