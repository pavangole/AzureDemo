FROM  ubuntu:20.04
RUN apt update
RUN apt install python3 -y
RUN apt install python3-pip -y
RUN pip3 install flask
RUN apt install git -y
COPY script /
CMD ./script
EXPOSE 8080
