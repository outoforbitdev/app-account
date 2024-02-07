FROM outoforbitdev/dotnet-reactapp:1.0.0
  WORKDIR /app
#   COPY app-account/*.csproj app-account/
#   RUN dotnet restore oodreacttemplate/*.csproj
  COPY ./app-account /app
  RUN dotnet dev-certs https
  RUN rm -rf /app/ClientApp/src

ENTRYPOINT [ "dotnet", "run" ]