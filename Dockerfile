FROM fusuf/whatsasena:latest

RUN git clone https://github.com/inrlwabot/faz-md /root/inrl
WORKDIR /root/inrl
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
