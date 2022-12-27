@extends('errors::illustrated-layout')

@section('title', __('Unauthenticated | Electra'))
@section('code', '401')
@section('message', $exception->getMessage() ?: 'Unauthenticated')
@section('image')
    <img src="/storage/error-pages/401.svg" alt="401" class="w-full">
@endsection