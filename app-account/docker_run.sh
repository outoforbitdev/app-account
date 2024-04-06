#!/usr/bin/env sh

dotnet restore --source /nuget_cache
dotnet build --no-restore
dotnet run --no-restore --no-build