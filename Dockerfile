FROM outoforbitdev/dotnet-reactapp:1.0.0 AS build
  WORKDIR /app
  COPY app-account/*.csproj app-account/
  RUN dotnet restore app-account/*.csproj
  COPY ./app-account ./app-account
  RUN dotnet publish app-account/app-account.csproj -c release -o app-account/bin/release/ --no-cache

FROM outoforbitdev/dotnet-aspnet:dotnet6-0.2.0-staging.5--6c8bcce AS production
  WORKDIR /app
  COPY --from=build app/app-account/bin/release/ ./
  RUN file="$(ls)" && echo $file
  
ENTRYPOINT [ "dotnet", "app-account.dll" ]