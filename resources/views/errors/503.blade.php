@extends('errors::illustrated-layout')

@section('title', __('Service Unavailable | Electra'))
@section('code', '503')
@section('message', $exception->getMessage() ?: 'Service Unavailable')
@section('image')
    <img src="/storage/error-pages/503.svg" alt="503" class="w-full">
@endsection