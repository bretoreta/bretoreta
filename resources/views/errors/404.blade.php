@extends('errors::illustrated-layout')

@section('title', __('Not Found | Electra'))
@section('code', '404')
@section('message', $exception->getMessage() ?: 'Not Found')
@section('image')
    <img src="/storage/error-pages/404.svg" alt="404" class="w-full">
@endsection