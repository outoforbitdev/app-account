# This Dockerfile is used in the `just run` workflow to serve the development server
FROM outoforbitdev/dotnet-reactapp:1.0.0
  WORKDIR /app
  RUN dotnet dev-certs https
  COPY . /app
  RUN rm -rf /app/ClientApp

ENTRYPOINT [ "dotnet", "run" ]