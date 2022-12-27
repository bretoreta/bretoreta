@extends('errors::illustrated-layout')

@section('title', __('Unprocessable Entity | Electra'))
@section('code', '422')
@section('message', $exception->getMessage() ?: 'Unprocessable Entity')
@section('image')
    <img src="/storage/error-pages/422.svg" alt="422" class="w-full">
@endsection