@extends('errors::illustrated-layout')

@section('title', __('Forbidden | Electra'))
@section('code', '403')
@section('message', $exception->getMessage() ?: 'Forbidden')
@section('image')
    <img src="/storage/error-pages/403.svg" alt="403" class="w-full">
@endsection